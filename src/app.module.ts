import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { PostModule } from './modules/post/post.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    AuthModule,
    UserModule,
    PostModule,
    PassportModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST,
      port: 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
