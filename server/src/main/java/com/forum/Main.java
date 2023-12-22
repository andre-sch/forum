package com.forum;

import com.forum.http.*;
import com.forum.http.impl.Javalin.*;

import com.forum.features.listUsers.ListUsers;
import com.forum.features.createUser.CreateUser;
import com.forum.repositories.UsersRepository;
import com.forum.repositories.impl.InMemoryUsersRepository;

import com.forum.features.listPosts.ListPosts;
import com.forum.features.createPost.CreatePost;
import com.forum.repositories.PostsRepository;
import com.forum.repositories.impl.InMemoryPostsRepository;

import com.forum.features.listCategories.ListCategories;
import com.forum.features.createCategory.CreateCategory;
import com.forum.repositories.CategoriesRepository;
import com.forum.repositories.impl.InMemoryCategoriesRepository;


public class Main {
  public static void main(String[] args) {
    HttpServer server = new JavalinServer();
    HttpApp app = server.start(4000);

    UsersRepository usersRepository = new InMemoryUsersRepository();
    PostsRepository postsRepository = new InMemoryPostsRepository();
    CategoriesRepository categoriesRepository = new InMemoryCategoriesRepository();

    app.get("/users", new ListUsers(usersRepository).handler);
    app.post("/users", new CreateUser(usersRepository).handler);

    app.get("/posts", new ListPosts(postsRepository).handler);
    app.post("/posts", new CreatePost(postsRepository, usersRepository, categoriesRepository).handler);

    app.get("/categories", new ListCategories(categoriesRepository).handler);
    app.post("/categories", new CreateCategory(categoriesRepository).handler);
  }
}
