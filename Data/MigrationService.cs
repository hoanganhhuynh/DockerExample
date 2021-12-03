using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace Data
{
    public static class MigrationService
    {
        public static void MigrationData(IApplicationBuilder app) {
            using (var serviceScope = app.ApplicationServices.CreateScope()) {
                try
                {
                    serviceScope.ServiceProvider.GetService<DockerExempleDbContext>().Database.Migrate();
                }
                catch (Exception ex) {
                    throw ex;
                }
            }
        }
    }
}
