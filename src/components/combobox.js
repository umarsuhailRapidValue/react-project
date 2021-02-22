import React from 'react'
import Downshift from "downshift";

export default function Combobox(props) {
    return (
        <Downshift
        onChange={(selection) =>
          alert(`You selected ${selection.value}`)
        }
        itemToString={(item) => (item ? item.value : "")}
      >
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          isOpen,
          inputValue,
          highlightedIndex,
          selectedItem,
        }) => (
          <div style={{position:'relative',fontSize:12}}>
            <label {...getLabelProps()}>Enter a movie name</label>
            <input {...getInputProps()} />
            <ul
              {...getMenuProps()}
              style={{
                position: "absolute",
                display: "inline-block",
height: '100vh',
overflow: 'auto',
fontSize:' 12px',
left: '0px',
top: '30px',
listStyle: 'none',
              }}
            >
              {isOpen
                ? props.items
                    .filter(
                      (item) =>
                        !inputValue || item.value.includes(inputValue)
                    )
                    .map((item, index) => (
                      <li
                        {...getItemProps({
                          key: item.value,
                          index,
                          item,
                          style: {
                            backgroundColor:
                              highlightedIndex === index
                                ? "lightgray"
                                : "black",
                            fontWeight:
                              selectedItem === item
                                ? "bold"
                                : "normal",
                          },
                        })}
                      >
                        {item.value}
                      </li>
                    ))
                : null}
            </ul>
          </div>
        )}
      </Downshift>
    )
}
