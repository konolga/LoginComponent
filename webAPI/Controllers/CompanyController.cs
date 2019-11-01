using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Text;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

using webAPI.Dto;
using webAPI.Data;
using webAPI.Models;

namespace webAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class CompanyController : ControllerBase
    {
        private readonly ICompanyRepository _repo;
        private readonly IConfiguration _config;


        public CompanyController(ICompanyRepository repo, IConfiguration config)
        {
            _repo = repo;
            _config = config;           
        }
        [HttpPost("create")]
        public async Task<IActionResult> Create (CompanyForRegisterDto companyForRegister)
        {
            companyForRegister.Username = companyForRegister.Username.ToLower();
            if (await _repo.CompanyExists(companyForRegister.Username))
                return BadRequest ("Company already registered");

            var companyToCreate = new Company
            {
                Username = companyForRegister.Username
            };

            var createdCompany = await _repo.Create(companyToCreate);
            return StatusCode(201);
        }

        [HttpGet]
        public async Task<IActionResult> GetCompanies()
        {
            var companiesToReturn = await _repo.GetCompanies();
            return Ok(companiesToReturn);
        }


    }
}
