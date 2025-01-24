import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { Crud, OperatorsOptions, CustomOperators } from '@datafas/crud';

import { Project } from './project.entity';
import { ProjectsService } from './projects.service';

@Crud({
  model: {
    type: Project,
  },
  params: {
    companyId: {
      field: 'companyId',
      type: 'number',
    },
    id: {
      field: 'id',
      type: 'number',
      primary: true,
    },
  },
  query: {
    join: {
      users: {},
    },
  },
  operators: {
    custom: {
      custom: { query: (field: string, param: string) => `${field} = :${param}` },
    },
  },
})
@ApiTags('projects')
@Controller('/companies/:companyId/projects')
export class ProjectsController {
  constructor(public service: ProjectsService) {}
}
