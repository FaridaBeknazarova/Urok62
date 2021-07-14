'use strict';
    
import {post} from './post.js';
import {get} from './get.js';

get()
.then(data=>post(data));
