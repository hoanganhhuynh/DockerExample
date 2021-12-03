using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Data
{
    public class DockerExempleDbContext : DbContext
    {
        public DockerExempleDbContext(DbContextOptions<DockerExempleDbContext> options) : base(options) { }
        public DbSet<Note> Note { get; set; }
    }
}
