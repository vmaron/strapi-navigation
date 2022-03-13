import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-menu',
  template: `
    <!-- Icon -->
    <a class="hover:opacity-80 focus:opacity-80 mr-4" href="#">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="shopping-cart"
        class="w-4"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
      >
        <path
          fill="currentColor"
          d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
        ></path>
      </svg>
    </a>
    <a
      class="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple mr-4" href="#">
      <svg
        aria-hidden="true"
        class="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20">
        <path
          d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z">
        </path>
      </svg>
      <!-- Notification badge -->
      <span
        aria-hidden="true"
        class="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800">
      </span>
    </a>
    <div class="dropdown relative">
      <a
        class="dropdown-toggle flex items-center hidden-arrow"
        href="#"
        id="dropdownMenuButton2"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src="https://mdbootstrap.com/img/new/avatars/2.jpg"
          class="rounded-full"
          style="height: 25px; width: 25px"
          alt=""
          loading="lazy"
        />
      </a>
      <ul
        class="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left mt-1 hidden m-0 bg-clip-padding border border-gray-100 rounded-md shadow-md left-auto right-0"
        aria-labelledby="dropdownMenuButton2"
      >
        <li>
          <a
            class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
            href="#"
          >Action</a
          >
        </li>
        <li>
          <a
            class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
            href="#"
          >Another action</a
          >
        </li>
        <li>
          <a
            class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
            href="#"
          >Something else here</a
          >
        </li>
      </ul>
    </div>
    <ng-content></ng-content>
  `,
  styles: []
})
export class UserMenuComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
