// Write your Character component here
import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import CharacterCard from "./CharacterCard";


const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const StyledList = styled.div`
    width: 80%;
    background-color: black;
    opacity: .7;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 1px solid green;
    &::hover {
        border: 1px solid magenta;
    }
`

const CharacterContainer = (props) => {
    const characterArray = props.characterList;
    return (
        <div>
            {/* <CharacterCard characterList={characterArray} /> */}
            {characterArray.map(person => {
                return (
                    <StyledContainer>
                        <StyledList>
                            <h2 className="name" >{person.name}</h2>
                            <h2 className="year">{person.birth_year}</h2>
                        </StyledList>
                    </StyledContainer>
                )
            })  
            }
        </div>
    )
}

export default CharacterContainer;
