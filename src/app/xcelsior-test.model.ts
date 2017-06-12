import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as xcelsior from "xcelsior/xcelsior";

export interface TestGizmo {
  name: string,
  sprockets: number
};


/** 
 * Define the structure of the model
 * */
export interface TestGizmoStore {

  readonly user : {
    name: string;
  },

  readonly testGizmosInStore : {
    loading: boolean,
    readonly items: TestGizmo[];
  } 

  readonly testGizmosInCart : {
    loading: boolean,
    readonly items: TestGizmo[];
  } 
};


/**
 * Create an injectable service with the initial state
 */
export class TestGizmoStoreService extends xcelsior.xcelsior<TestGizmoStore> {

  constructor() {
    super(initialState);
  }
}

export const initialState: TestGizmoStore = {
  user: {
    name: "Your name here" 
  },

  testGizmosInStore: {
    loading: false,
    items: [
      {
        name: 'gadget',
        sprockets: 5
      },
      {
        name: 'widget',
        sprockets: 8
      },
    ],
  },

  testGizmosInCart: {
    loading: false,
    items: [],
  }
};