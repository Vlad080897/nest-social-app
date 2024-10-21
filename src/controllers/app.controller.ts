import { Controller } from '@nestjs/common';
import { DbService } from 'src/services/db.service';

@Controller()
export class AppController {
  constructor(private readonly dbService: DbService) {}

  async onModuleInit() {
    await this.dbService.configure();
  }
}
