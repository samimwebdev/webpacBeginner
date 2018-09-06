//console.log("Hello world");
import './css/style.css';
//import {loadbigImag} from'./imageViewer';
//importing jquery
import $ from 'jquery';
import _ from 'underscore';

import {add} from './add';
import {subs} from './subs';
import {multiply} from './multiply';
console.log(add(1, 2));
const body = $('body');
body.prepend("<h1>Hello from jquery!!</h1>")
console.log(_.max([2, 4, 6]));

//  const btn = document.createElement('button');
//  btn.innerText = 'click me';
//  btn.onclick = ()=>{
//    System.import('./imageViewer').then(module =>{
//      module.loadbigImag();
//    })
 
//  }
//  document.body.appendChild(btn);

