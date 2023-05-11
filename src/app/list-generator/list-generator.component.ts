import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Menu } from './menu';

@Component({
  selector: 'app-list-generator',
  templateUrl: './list-generator.component.html',
  styleUrls: ['./list-generator.component.css'],
})
export class ListGeneratorComponent implements OnInit {
  menulist: Menu[] = this.data.menu;
  constructor(private data: DataService) {}

  ngOnInit() {
    console.log('here');
    // const Div = document.createElement('div');
    // Div.textContent = 'test';
    const container = document.getElementById('container');
    // container.appendChild(Div);

    this.menulist.forEach((each) => this.addChild(container, each));
  }

  addChild = (parentNode, currentMenu: Menu) => {
    const documentTree = document.createElement('ul');
    const a = document.createElement('a');
    const childli = document.createElement('li');

    if (!parentNode.isEqualNode(document.getElementById('container'))) {
      childli.textContent = '-child:';
      documentTree.appendChild(childli);
    }

    a.textContent = 'name: ' + currentMenu.name;

    documentTree.appendChild(a);
    if (currentMenu.child.length !== 0) {
      currentMenu.child.forEach((childMenu) => {
        this.addChild(documentTree, childMenu);
      });
    }
    parentNode.appendChild(documentTree);
  };
}
