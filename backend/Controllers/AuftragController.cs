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
    public class AuftragController : Controller
    {
        private readonly IConfiguration _configuration;

        public AuftragController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        //private async Task CountdownStart(DateTime time)
        //{
        //    Boolean flag = true;
        //    await Task.Run(() =>
        //    {
        //        do
        //        {
        //            Task.Delay(10000).Wait();
        //            string query = @"update ""Auftrag"" set ""STATUS"" = 'angenommen' where ""ID"" = @id and ""STATUS"" = 'bestätigt'";
        //            DataTable table = new DataTable();
        //            string sqlDataSource = _configuration.GetConnectionString("AppCon");
        //            NpgsqlDataReader myReader;
        //            using (NpgsqlConnection myCon = new NpgsqlConnection(sqlDataSource))
        //            {
        //                myCon.Open();
        //                using (NpgsqlCommand myCommand = new NpgsqlCommand(query, myCon))
        //                {
        //                    myCommand.Parameters.AddWithValue("@id", id);
        //                    myReader = myCommand.ExecuteReader();
        //                    table.Load(myReader);

        //                    myReader.Close();
        //                    myCon.Close();
        //                }
        //            }

        //            string query1 = @"select exists (select ""ID"" from ""Auftrag"" set ""STATUS"" = 'angenommen' where ""ID"" = @id and ""STATUS"" = 'angenommen')";
        //            DataTable table1 = new DataTable();
        //            string sqlDataSource1 = _configuration.GetConnectionString("AppCon");
        //            NpgsqlDataReader myReader1;
        //            using (NpgsqlConnection myCon = new NpgsqlConnection(sqlDataSource))
        //            {
        //                myCon.Open();
        //                using (NpgsqlCommand myCommand = new NpgsqlCommand(query1, myCon))
        //                {
        //                    myCommand.Parameters.AddWithValue("@id", id);
        //                    myReader1 = myCommand.ExecuteReader();
        //                    table1.Load(myReader1);

        //                    myReader1.Close();
        //                    myCon.Close();
        //                }
        //            }
        //            if (table1.Equals("true"))
        //            {
        //                flag = false;
        //            }
        //        } while (true);
               
        //    });

            //await Task.Run(() =>
            //{
            //    do
            //    {
                    
            //    } while (true);

            //});

            //await Task.Run(() =>
            //{
            //    Task.Delay(60000).Wait();
            //    string query = @"update ""Auftrage"" set ""STATUS"" = 'nicht angenommen' where ""ID"" = @id and ""STATUS"" = 'offen'";
            //    DataTable table = new DataTable();
            //    string sqlDataSource = _configuration.GetConnectionString("AppCon");
            //    NpgsqlDataReader myReader;
            //    using (NpgsqlConnection myCon = new NpgsqlConnection(sqlDataSource))
            //    {
            //        myCon.Open();
            //        using (NpgsqlCommand myCommand = new NpgsqlCommand(query, myCon))
            //        {
            //            myCommand.Parameters.AddWithValue("@time", time);
            //            myReader = myCommand.ExecuteReader();
            //            table.Load(myReader);

            //            myReader.Close();
            //            myCon.Close();
            //        }
            //    }
            //    flag = false;
            //});
        //}

        //api/Auftrag/all
        [HttpGet("all")]
        public JsonResult GetAuftrag(string kurzzeichen)
        {
            string query = @"select * from ""Auftrag"" where ""AUFTRAGGEBER"" = @kurzzeichen or ""AUFTRAGNEHMER"" = @kurzzeichen";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AppCon");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection myCon = new NpgsqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (NpgsqlCommand myCommand = new NpgsqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@kurzzeichen", kurzzeichen);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }

        //api/Auftrag/delete/{id}
        [HttpDelete("delete/{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"delete from ""Auftrag"" where ""ID"" = @id";

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


        //api/Auftrag/create
        [HttpPost("create")]
        public JsonResult CreateAssingment(Auftrag a)
        {
            string query = @"insert into ""Auftrag""(""FK_KSV"", ""AUFTRAGGEBER"", ""AUFTRAGNEHMER"", ""FK_SPERREN"", ""KOMMENTAR"", ""VON"", ""BIS"", ""STATUS"") 
                                            values (@fk_ksv, @auftraggeber, @auftragnehmer, @fk_sperren, @kommentar, @von, @von, @status)";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AppCon");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection myCon = new NpgsqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (NpgsqlCommand myCommand = new NpgsqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@fk_ksv", a.fk_ksv);
                    myCommand.Parameters.AddWithValue("@auftraggeber", a.auftraggeber);
                    myCommand.Parameters.AddWithValue("@auftragnehmer", a.auftragnehmer);
                    myCommand.Parameters.AddWithValue("@fk_sperren", a.fk_sperren);
                    myCommand.Parameters.AddWithValue("@kommentar", a.kommentar);
                    myCommand.Parameters.AddWithValue("@status", a.status);
                    myCommand.Parameters.AddWithValue("@von", a.von);
                    myCommand.Parameters.AddWithValue("@bis", a.bis);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }
            //CountdownStart(DateTime.Now);
            return new JsonResult("Added successfully");
        }


        //api/Auftrag/all
        [HttpGet("getId")]
        public JsonResult getId(string auftraggeber)
        {
            DateTime now = DateTime.Now;
            string query = @"select ""ID"" from ""Auftrag"" where ""AUFTRAGGEBER"" = @auftraggeber order by ""ID"" desc limit 1";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AppCon");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection myCon = new NpgsqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (NpgsqlCommand myCommand = new NpgsqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@auftraggeber", auftraggeber);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    

                    myReader.Close();
                    myCon.Close();
                    return new JsonResult(table);
                }
            }
        }

        //api/Auftrag/update
        [HttpPut("update")]
        public JsonResult UpdateAssigment(Auftrag a)
        {
            string query = @"update ""Auftrag"" set ""STATUS"" = @status where ""ID"" = @id";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AppCon");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection myCon = new NpgsqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (NpgsqlCommand myCommand = new NpgsqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@id", a.id);
                    myCommand.Parameters.AddWithValue("@status", a.status);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Updated successfully");
        }
    }
}
