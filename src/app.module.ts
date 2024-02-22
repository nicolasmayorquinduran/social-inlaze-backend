import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { PostModule } from './modules/post/post.module';
import { InteractionModule } from './modules/interaction/interaction.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { FeedModule } from './modules/feed/feed.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    PostModule,
    InteractionModule,
    PassportModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST,
      port: 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: 'inlaze-social',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    FeedModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
