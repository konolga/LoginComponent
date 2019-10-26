using System.ComponentModel.DataAnnotations;

namespace webAPI.Dto
{
    public class UserForLoginDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        public string Identifier { get; set; }
        [Required]
        public string Password { get; set; }
    }
}