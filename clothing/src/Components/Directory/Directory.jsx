import React, { Component } from 'react';
import { MenuItem } from '../Menu-Item/MenuItem';
import "./Directory.scss";

export default class Directory extends Component {
    constructor() {
        super();

        this.state = {
            sections:[
                {
                  title: 'hats',
                  subtitle:"SHOP NOW",
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                    title: 'jackets',
                    subtitle:"SHOP NOW",
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  subtitle:"SHOP NOW",
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  subtitle:"SHOP NOW",
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  subtitle:"SHOP NOW",
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]              
        }
    }
    render() {
        return (
            <div className="directory-menu"> 
                {
                    this.state.sections.map(({title,subtitle,imageUrl,id,size}) => {
                        return (<MenuItem key= {id} title={title} subtitle={subtitle} imageUrl={imageUrl} size={size} />
                    )})
                }
            </div>
        )
    }
}
