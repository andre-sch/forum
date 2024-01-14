package com.forum.repositories.impl;

import com.forum.entities.Category;

public class InMemoryCategoriesRepository extends InMemoryRepository<Category> {
  protected String getInstanceId(Category instance) {
    return instance.getName();
  }
}
