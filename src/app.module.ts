import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { PostService } from './post/post.service';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [PostModule, UserModule],
  controllers: [AppController, UserController],
  providers: [AppService, PrismaService, UserService, PostService],
})
export class AppModule {}
