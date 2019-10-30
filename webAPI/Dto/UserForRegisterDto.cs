using System.ComponentModel.DataAnnotations;

namespace webAPI.Dto
{
    public class UserForRegisterDto
    {
        [Required]
        [RegularExpression(@"^[a-zA-Z][a-zA-Z0-9]*$", ErrorMessage = "Characters are not allowed, first should be letter")]
        [StringLength(25, MinimumLength=4, ErrorMessage="Username must be between 4 and 25 characters")]
        public string Username { get; set; }

        [Required]
        [RegularExpression(@"^[a-zA-Z][a-zA-Z0-9]*$", ErrorMessage = "Characters are not allowed")]
        [StringLength(25, MinimumLength=4, ErrorMessage="Username must be between 4 and 25 characters")]
        public string Identifier { get; set; }

        [Required]
        [RegularExpression(@"^[a-zA-Z0-9]*$", ErrorMessage = "Characters are not allowed")]
        [StringLength(25, MinimumLength=4, ErrorMessage="Password must be between 4 and 25 characters")]
        public string Password { get; set; }

    }
}