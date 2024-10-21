import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';

@Injectable()
export class DbService {
  constructor(private readonly configService: ConfigService) {}

  private readonly dbHost = this.configService.get<string>('DB_HOST');
  private readonly dbPort = this.configService.get<number>('DB_PORT');
  private readonly dbUsername = this.configService.get<string>('DB_USERNAME');
  private readonly dbPassword = this.configService.get<string>('DB_PASSWORD');
  private readonly dbName = this.configService.get<string>('DB_NAME');

  private readonly dataSource = new DataSource({
    type: 'postgres',
    host: this.dbHost,
    port: this.dbPort,
    username: this.dbUsername,
    password: this.dbPassword,
    database: this.dbName,
    entities: [],
  });

  public async configure() {
    try {
      await this.dataSource.initialize();
      console.log('Database connection established');
    } catch (error) {
      console.error(error);
    }
  }
}
