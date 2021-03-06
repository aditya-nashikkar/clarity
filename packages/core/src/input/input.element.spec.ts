/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { render, html } from 'lit-html';
import { CdsInput } from '@clr/core/input';
import { createTestElement, waitForComponent, removeTestElement, componentIsStable } from '@clr/core/test/utils';

describe('cds-input', () => {
  let component: CdsInput;
  let element: HTMLElement;

  beforeEach(async () => {
    element = createTestElement();
    render(
      html` <cds-input>
        <label>input</label>
        <input type="text" />
      </cds-input>`,
      element
    );

    await waitForComponent('cds-input');

    component = element.querySelector<CdsInput>('cds-input');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should create component', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
  });
});
