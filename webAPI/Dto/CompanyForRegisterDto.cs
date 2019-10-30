using System.ComponentModel.DataAnnotations;

namespace webAPI.Dto
{
    public class CompanyForRegisterDto
    {
        [Required]
        [RegularExpression(@"^[a-zA-Z0-9]$", ErrorMessage = "Characters are not allowed")]
        [StringLength(50, MinimumLength=4, ErrorMessage="Username must be between 4 and 50 characters")]
        public string Username { get; set; }

        [Required]
        [RegularExpression(@"^[a-zA-Z0-9]$", ErrorMessage = "Characters are not allowed")]
        [StringLength(50, MinimumLength=4, ErrorMessage="Identifier must be between 4 and 50 characters")]
        public string Identifier { get; set; }


        [Required]
        [StringLength(25, MinimumLength=4, ErrorMessage="Address must be between 4 and 50 characters")]
        public string Address { get; set; }

        [Required]
        [StringLength(25, MinimumLength=4, ErrorMessage="City must be between 4 and 25 characters")]
        public string City { get; set; }

        [Url]
        [StringLength(25, MinimumLength=4, ErrorMessage="Url must be between 4 and 25 characters")]
        public string Url { get; set; }

        [EmailAddress]
        [StringLength(50, MinimumLength=4, ErrorMessage="Email must be between 4 and 50 characters")]
        public string Email { get; set; }

        [Phone]
        [Required]
        [StringLength(25, MinimumLength=4, ErrorMessage="Phone must be between 4 and 25 characters")]
        public string Phone { get; set; }

        [Phone]
        [Required]
        [StringLength(25, MinimumLength=4, ErrorMessage="Phone must be between 4 and 25 characters")]
        public string AdditionalPhone { get; set; }

        [Phone]
        [Required]
        [StringLength(25, MinimumLength=4, ErrorMessage="Fax must be between 4 and 25 characters")]
        public string Fax { get; set; }

        public string MainBusiness { get; set; }

        public string SecondaryBusiness { get; set; }

        public string Status { get; set; }

        [StringLength(512, MinimumLength=4, ErrorMessage="Fax must be between 4 and 512 characters")]
        public string Description { get; set; }
    }
}