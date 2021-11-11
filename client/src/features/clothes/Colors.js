import React from 'react';
import './clothes.css';

const Colors = (props) => {
    


   
    return(
        <div className="color-container">

            <button className={` color-button lightgray ${props.color==="#CCD2d8-light-gray" ? "color-btn-border" : ""}`}   value="#CCD2d8-light-gray" onClick={props.onClick}/>

            <button className={`color-button black ${props.color==="#000000-black" ? "color-btn-border" : ""}`} onClick={props.onClick} value="#000000-black"/>

            <button className={`color-button white ${props.color==="#FFFFFF-white" ? "color-btn-border" : ""}`} onClick={props.onClick} value="#FFFFFF-white"/>


            <button className={`color-button tan ${props.color==="#D2B48C-tan" ? "color-btn-border" : ""}`} onClick={props.onClick} value="#D2B48C-tan"/>


            <button className={`color-button old-moss-green ${props.color==="#8B7438-old-moss-green" ? "color-btn-border" : ""}`} onClick={props.onClick} value="#8B7438-old-moss-green"/>


            <button className={`color-button azure ${props.color==="#007AF-azure" ? "color-btn-border" : ""}`} onClick={props.onClick} value="#007AF-azure"/>


            <button className={`color-button teal ${props.color==="#008080-teal" ? "color-btn-border" : ""}`} onClick={props.onClick} value="#008080-teal"/>


            <button className={`color-button navy-blue ${props.color==="#000080-navy-blue" ? "color-btn-border" : ""}`} onClick={props.onClick} value="#000080-navy-blue"/>


            <button className={`color-button pink ${props.color==="#ffc0cb-pink" ? "color-btn-border" : ""}`} onClick={props.onClick} value="#ffc0cb-pink"/>


            <button className={`color-button sizzling-red ${props.color==="#ff2d55-red" ? "color-btn-border" : ""}`} onClick={props.onClick} value="#ff2d55-red"/>


            <button className={`color-button burgundy ${props.color==="#800020-burgundy" ? "color-btn-border" : ""}`} onClick={props.onClick}value="#800020-burgundy" />


            <button className={`color-button mauve ${props.color==="#e0b0ff-mauve" ? "color-btn-border" : ""}`} onClick={props.onClick} value="#e0b0ff-mauve"/>

            <button className={`color-button medium-orchid ${props.color==="#af52de-medium-orchid" ? "color-btn-border" : ""}`} onClick={props.onClick} value="#af52de-medium-orchid"/>


            <button className={`color-button tangerine-yellow ${props.color==="#FFCC00-tangerine-yellow" ? "color-btn-border" : ""}`} onClick={props.onClick} value="#FFCC00-tangerine-yellow"/>


            <button className={`color-button vivid-gamboge ${props.color==="#FF9500-vivid-gamboge" ? "color-btn-border" : ""}`} onClick={props.onClick} value="#FF9500-vivid-gamboge"/>


            <button className={`color-button coral ${props.color==="#ff7f50-coral" ? "color-btn-border" : ""}`} onClick={props.onClick} value="#ff7f50-coral"/>


            <button className={`color-button ufo-green ${props.color==="#34C759-green" ? "color-btn-border" : ""}`} onClick={props.onClick} value="#34C759-green"/>


            <button className={`color-button olive ${props.color==="#808000-olive" ? "color-btn-border" : ""}`} onClick={props.onClick} value="#808000-olive"/>
        </div>
    )
}

export default Colors