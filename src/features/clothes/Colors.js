import React from 'react';
import './clothes.css';

const Colors = (props) => {
    
    return(
        <div className="color-container">
            <button className="color-button lightgray" value="#CCD2d8-light-gray" onClick={props.onClick}/>
            <button className="color-button black" onClick={props.onClick} value="#000000-black"/>
            <button className="color-button white" onClick={props.onClick} value="#FFFFFF-white"/>
            <button className="color-button tan" onClick={props.onClick} value="#D2B48C-tan"/>
            <button className="color-button old-moss-green" onClick={props.onClick} value="#8B7438-old-moss-green"/>
            <button className="color-button azure" onClick={props.onClick} value="#007AF-azure"/>
            <button className="color-button teal" onClick={props.onClick} value="#008080-teal"/>
            <button className="color-button navy-blue" onClick={props.onClick} value="#000080-navy-blue"/>
            <button className="color-button pink" onClick={props.onClick} value="#ffc0cb-pink"/>
            <button className="color-button sizzling-red" onClick={props.onClick} value="#ff2d55-red"/>
            <button className="color-button burgundy" onClick={props.onClick}value="#800020-burgundy" />
            <button className="color-button mauve" onClick={props.onClick} value="#e0b0ff-mauve"/>
            <button className="color-button medium-orchid" onClick={props.onClick} value="#af52de-medium-orchid"/>
            <button className="color-button tangerine-yellow" onClick={props.onClick} value="#FFCC00-tangerine-yellow"/>
            <button className="color-button vivid-gamboge" onClick={props.onClick} value="#FF9500-vivid-gamboge"/>
            <button className="color-button coral" onClick={props.onClick} value="#ff7f50"/>
            <button className="color-button ufo-green" onClick={props.onClick} value="#34C759-green"/>
            <button className="color-button olive" onClick={props.onClick} value="#808000-olive"/>
        </div>
    )
}

export default Colors