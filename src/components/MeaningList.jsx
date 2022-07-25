import React from 'react'

function MeaningList({mean}) {
  return (
    <div>
        {mean.map(val => val.meanings.map(means => means.definitions.map(def => (
            <div key={def.definition}>
                <li>{def.definition}</li>
                <hr />
            </div>)
        )))}
    </div>
  );
}

export default MeaningList