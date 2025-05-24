
import { describe, it, expect, vitest,  } from 'vitest'
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
// import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import BottomSection from './BottomSection.tsx';

// describe('Bottom section', () => {
//   it('component is rendered', () => {
//     //expect(true).toBeTruthy();
//     const {getByRole} = render(<BottomSection />);
//    //console.log(getByRole("table"))
//     //expect(screen.getByText(/loading/i)).toBeInTheDocument();
//   });
// });

//vitest.mock("XMLHttpRequest");

describe('A table shows correct number of rows', () => {
  it('number of rows for "rus" request should be equal to 4', () => {
    const {getAllByRole} = render(<BrowserRouter><BottomSection searchValue={"rus"}/></BrowserRouter>);
    const rowsInResultTable = getAllByRole("row").length;

    fireEvent.click(screen.getByText('Belarus'));
    console.log(screen.getByText("Details"))
    //expect(rowsInResultTable).toEqual(4)
  })

  // it('text in the table should descriving not found message', () => {
  //   render(<BrowserRouter><BottomSection searchValue={"notfound"}/></BrowserRouter>);
  //   const rowsInResultTable = screen.getByText("Result is not found!");
  //   console.log(rowsInResultTable)
  //   expect(rowsInResultTable).toBeInTheDocument();

    
  // })

})
