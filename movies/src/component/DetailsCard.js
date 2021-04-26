import React, { useEffect } from 'react';

export const DetailsCard = ({ movie }) => {
    const {title,releaseDate,synopsis}=movie
    useEffect(() => {
        // Get the modal
        var modal = document.getElementById("detailsCard");

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    })

    return (
        <div className='content-container'>
            <div id="detailsCard" className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="box-layout__title">{`${title}-${releaseDate}`}</div>
                    </div>
                    <p>{synopsis}</p>
                </div>
            </div>
        </div>
    )
}

export default DetailsCard;
