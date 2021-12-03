FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build

RUN apt-get update && \
apt-get install -y wget && \
apt-get install -y gnupg2 && \
wget -qO- https://deb.nodesource.com/setup_13.x | bash - && \
apt-get install -y build-essential nodejs

WORKDIR /src
COPY ["DockerExample/DockerExample.csproj", "DockerExample/"]
COPY ["Data/Data.csproj", "Data/"]
RUN dotnet restore "DockerExample/DockerExample.csproj"
COPY . .
WORKDIR "/src/DockerExample"
RUN dotnet build "DockerExample.csproj" -c Release -o /app/build

FROM build AS publish
WORKDIR "/src/DockerExample"
RUN dotnet publish "DockerExample.csproj" -c Release -o /app/publish


FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "DockerExample.dll"]