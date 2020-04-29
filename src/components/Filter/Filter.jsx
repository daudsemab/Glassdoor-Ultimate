import React from 'react'

import './Filter.css'

export default function Filter({xpSelected1, xpSelected2, allXp, checkedMale, checkedFemale, checkedBoth}) {
    return (
        <div id='Filter'>
            <h1 className='main-filter-heading'>Filter</h1>
            <div className='all-filters-container'>
                {/*****************  EXPERIENCE FILTER SECTION   *****************/}
                <div className='filter-section'>
                    <h2>EXPERIENCE</h2>
                    <div className='xp-radios'>
                        <div className='xp-radios-item'>
                            <input onChange={xpSelected1} type="radio" name='radio' value="above 3 years" />
                            <label htmlFor="above 3 years">ABOVE 3 YEARS</label>
                        </div>
                        <div className='xp-radios-item'>
                            <input onChange={xpSelected2} type="radio" name='radio' value="3 years or below" />
                            <label htmlFor="3 years or below">3 YEARS OR BELOW</label>
                        </div>
                        <div className='xp-radios-item'>
                            <input onChange={allXp} type="radio" name='radio' value="all" />
                            <label htmlFor="all">All</label>
                        </div>
                    </div> {/*xp-radios end*/}
                </div>
                {/*****************  EXPERIENCE FILTER SECTION   *****************/}
                <div className='filter-section'>
                    <h2>GENDER</h2>
                    <div className='gender-radios'>
                        <div className='gender-radios-item'>
                            <input onChange={checkedMale} type="radio" name='gender' value="male" />
                            <label htmlFor='male'>MALE</label>
                        </div>
                        <div className='gender-radios-item'>
                            <input onChange={checkedFemale} type="radio" name='gender' value="female" />
                            <label htmlFor='female'>FEMALE</label>
                        </div>
                        <div className='gender-radios-item'>
                            <input onChange={checkedBoth} type="radio" name='gender' value="Both" />
                            <label htmlFor='both'>Both</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
