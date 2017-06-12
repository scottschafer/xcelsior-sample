import { TestBed, async } from '@angular/core/testing';
import { TestGizmo, TestGizmoStore, TestGizmoStoreService } from './xcelsior-test.model';
import * as xcelsior from "xcelsior/xcelsior";

describe('xcelsior', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
      ],
    }).compileComponents();
  }));

  it('model is immutable when adding elements', async(() => {

    // create new test service
    const service : TestGizmoStoreService = new TestGizmoStoreService();
    expect(service.model.testGizmosInStore.items.length).toBe(2);
    expect(service.model.testGizmosInCart.items.length).toBe(0);

    // save the original model object
    let originalModelObj = service.model;
    let originalModelString = JSON.stringify(service.model);

    // modify the model by adding a new item
    service.modify(service.model.testGizmosInCart.items,
      function(items:TestGizmo[]) {
        items.push({name: "This is a new gizmo", sprockets: 0});
        return items;
      }
    );

    // verify it was added
    expect(service.model.testGizmosInCart.items.length).toBe(1);
    
    // verify that the act of adding it created a new model object
    let newModelObj = service.model;
    expect(newModelObj === originalModelObj).toBeFalsy();

    // verify that the new model object uses the same testGizmosInStore array, as it wasn't modified
    expect(newModelObj.testGizmosInCart === originalModelObj.testGizmosInCart).toBeFalsy();
    expect(newModelObj.testGizmosInStore === originalModelObj.testGizmosInStore).toBeTruthy();    
  }));


  it('model is immutable when modifying properties', async(() => {

    // create new test service
    const service : TestGizmoStoreService = new TestGizmoStoreService();
    expect(service.model.testGizmosInStore.items.length).toBe(2);
    expect(service.model.testGizmosInCart.items.length).toBe(0);

    // save the original model object
    let originalModelObj = service.model;
    let originalModelString = JSON.stringify(service.model);

    // modify the model by adding a new item
    service.modify(service.model.user,
      function(user) {
        user.name = 'new user name';
        return user;
      }
    );

    // verify that the act of adding it created a new model object
    let newModelObj = service.model;
    expect(newModelObj === originalModelObj).toBeFalsy();
    expect(newModelObj.user.name).toBe('new user name');

    // verify that the new model object uses the same arrays as they weren't modified
    expect(newModelObj.testGizmosInCart === originalModelObj.testGizmosInCart).toBeTruthy();
    expect(newModelObj.testGizmosInStore === originalModelObj.testGizmosInStore).toBeTruthy();    
  }));

});
