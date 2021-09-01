using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Npgsql;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AssignmentController : Controller
    {

        private readonly IConfiguration _configuration;

        public AssignmentController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        private async Task CountdownStart(DateTime time)
        {
            await Task.Run(() =>
            {
                Task.Delay(10000).Wait();
                string query = @"update ""Assignment"" set ""STATUS"" = 'angenommen' where ""TIME"" = @time and ""STATUS"" = 'cool'";
                DataTable table = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("AppCon");
                NpgsqlDataReader myReader;
                using (NpgsqlConnection myCon = new NpgsqlConnection(sqlDataSource))
                {
                    myCon.Open();
                    using (NpgsqlCommand myCommand = new NpgsqlCommand(query, myCon))
                    {
                        myCommand.Parameters.AddWithValue("@time", time);
                        myReader = myCommand.ExecuteReader();
                        table.Load(myReader);

                        myReader.Close();
                        myCon.Close();
                    }
                }
            });

            await Task.Run(() =>
            {
                Task.Delay(30000).Wait();
                string query = @"update ""Assignment"" set ""STATUS"" = 'nicht angenommen' where ""TIME"" = @time and ""STATUS"" = 'offen'";
                DataTable table = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("AppCon");
                NpgsqlDataReader myReader;
                using (NpgsqlConnection myCon = new NpgsqlConnection(sqlDataSource))
                {
                    myCon.Open();
                    using (NpgsqlCommand myCommand = new NpgsqlCommand(query, myCon))
                    {
                        myCommand.Parameters.AddWithValue("@time", time);
                        myReader = myCommand.ExecuteReader();
                        table.Load(myReader);

                        myReader.Close();
                        myCon.Close();
                    }
                }
            });
            
        }

        [HttpGet]
        public JsonResult GetAssignment()
        {
            string query = @"select * from ""Assignment"" order by ""TIME"" desc";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AppCon");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection myCon = new NpgsqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (NpgsqlCommand myCommand = new NpgsqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }


        //api/Employee/{id}
        [HttpGet("{id}")]
        public JsonResult AssignmentFindById(int id)
        {
            string query = @"select * from ""Assignment"" where ""ID"" = @id";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AppCon");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection myCon = new NpgsqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (NpgsqlCommand myCommand = new NpgsqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@id", id);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }


        //api/Employee/delete/{id}
        [HttpDelete("delete/{id}")]
        public JsonResult DeleteAssignment(int id)
        {
            string query = @"delete from ""Assignment"" where ""ID"" = @id";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AppCon");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection myCon = new NpgsqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (NpgsqlCommand myCommand = new NpgsqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@id", id);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Deleted successfully");
        }

        ////api/Employee/insert
        //[HttpPost("create")]
        //public JsonResult CreateAssingment(Assignment ass)
        //{
        //    string query = @"insert into ""Assignment""(""FROM"", ""TO"", ""TYPE"", ""TIME"", ""STATUS"") values (@from, @to, @type, @time, @status)";
        //    DateTime now = DateTime.Now;

        //    DataTable table = new DataTable();
        //    string sqlDataSource = _configuration.GetConnectionString("AppCon");
        //    NpgsqlDataReader myReader;
        //    using (NpgsqlConnection myCon = new NpgsqlConnection(sqlDataSource))
        //    {
        //        myCon.Open();
        //        using (NpgsqlCommand myCommand = new NpgsqlCommand(query, myCon))
        //        {
        //            myCommand.Parameters.AddWithValue("@from", ass.from);
        //            myCommand.Parameters.AddWithValue("@to", ass.to);
        //            myCommand.Parameters.AddWithValue("@type", ass.type);
        //            myCommand.Parameters.AddWithValue("@time", now);
        //            myCommand.Parameters.AddWithValue("@status", ass.status);
        //            myReader = myCommand.ExecuteReader();
        //            table.Load(myReader);

        //            myReader.Close();
        //            myCon.Close();
        //        }
        //    }
        //    CountdownStart(now);
        //    return new JsonResult("Added successfully");
        //}

        ////api/Employee/update
        //[HttpPut("update")]
        //public JsonResult UpdateAssigment(Assignment ass)
        //{
        //    string query = @"update ""Assignment"" set ""STATUS"" = @status where ""ID"" = @id";

        //    DataTable table = new DataTable();
        //    string sqlDataSource = _configuration.GetConnectionString("AppCon");
        //    NpgsqlDataReader myReader;
        //    using (NpgsqlConnection myCon = new NpgsqlConnection(sqlDataSource))
        //    {
        //        myCon.Open();
        //        using (NpgsqlCommand myCommand = new NpgsqlCommand(query, myCon))
        //        {
        //            myCommand.Parameters.AddWithValue("@id", ass.id);
        //            myCommand.Parameters.AddWithValue("@status", ass.status);
        //            myReader = myCommand.ExecuteReader();
        //            table.Load(myReader);

        //            myReader.Close();
        //            myCon.Close();
        //        }
        //    }

        //    return new JsonResult("Updated successfully");
        //}
    }
}
