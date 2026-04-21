# Create Workspace

* npx create-nx-workspace@latest people-workspace --preset=angular-monorepo

# Create Layout Libraries

* nx g @nx/angular:library libs/shared/ui/content --tags=ui
* nx g @nx/angular:library libs/shared/ui/footer --tags=ui
* nx g @nx/angular:library libs/shared/ui/header --tags=ui

# Create data access libraries and Angular Services

## Config

* nx g @nx/angular:library libs/shared/data-access/config --tags=data-access --standalone=false
* rm .\libs\shared\data-access\config\src\lib\config-module.ts
* nx g @nx/angular:service config --project=config
* Edit index.ts to export service

## People

* nx g @nx/angular:library libs/shared/data-access/people-service --tags=data-access --standalone=false
* rm .\libs\shared\data-access\people-service\src\lib\people-service-module.ts
* nx g @nx/angular:service people-service --project=people-service                                    
* Edit index.ts to export service

