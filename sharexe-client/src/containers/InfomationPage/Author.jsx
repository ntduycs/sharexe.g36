import React, { Component } from 'react';
import Status from './Status.jsx';

class Author extends Component {
    render() {
        return (
            <aside class="sidebar sidebar_author">
                 <div class="author-card sidebar-card">
                     <div class="author-infos">
                         <div class="author_avatar">
                             <img src="images/duy2.jpg" alt="Presenting the broken author avatar :D" />
                         </div>

                         <div class="author">
                             <h4>Duy Nguyen</h4>
                             <p>Signed Up: 30 Third 2019</p>
                         </div>
                 

                         <div class="author-badges">
                             <ul class="list-unstyled">
                                 <li>
                                     <span data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Diamnond Author">
                                         <img src="images/svg/author_rank_diamond.svg" alt="" class="svg" />
                                     </span>
                                 </li>
                                 <li>
                                     <span data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Has sold more than $10k">
                                         <img src="images/svg/author_level_3.svg" alt="" class="svg" />
                                     </span>
                                 </li>
                                 <li>
                                     <span data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Referred 10+ members">
                                         <img src="images/svg/affiliate_level_1.svg" alt="" class="svg" />
                                     </span>
                                 </li>
                                 <li>
                                     <span data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Has Collected 2+ Items">
                                         <img src="images/svg/collection_level_1.svg" alt="" class="svg" />
                                     </span>
                                 </li>
                                 <li>
                                     <span data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Exclusive Author">
                                         <img src="images/svg/exclusive_author.svg" alt="" class="svg" />
                                     </span>
                                 </li>
                                 <li>
                                     <span data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Weekly Featured Author">
                                         <img src="images/svg/featured_author.svg" alt="" class="svg" />
                                     </span>
                                 </li>
                                 <li>
                                     <span data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Member for 2 Year">
                                         <img src="images/svg/members_years.svg" alt="" class="svg" />
                                     </span>
                                 </li>
                                 <li>
                                     <span data-toggle="tooltip" data-placement="bottom" title="" data-original-title="The seller is recommended by authority">
                                         <img src="images/svg/recommended.svg" alt="" class="svg" />
                                     </span>
                                 </li>
                                 <li>
                                     <span data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Won a contest">
                                         <img src="images/svg/contest_winner.svg" alt="" class="svg" />
                                     </span>
                                 </li>
                                 <li>
                                     <span data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Helped to resolve copyright issues">
                                         <img src="images/svg/copyright.svg" alt="" class="svg" />
                                     </span>
                                 </li>
                             </ul>
                         </div>
                     </div>   
                 </div>

                 <Status />
             </aside>
        );
    }
}


export default Author;