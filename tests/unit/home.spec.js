import { render, screen, fireEvent, waitFor } from '@testing-library/vue'
import '@testing-library/jest-dom'
import Home from '../../src/views/Home.vue'
import Title from '../../src/components/Title.vue'

describe('Home works', () => {
  render(Home)
  it('renders text', async () => {
    expect( screen.getByText( /webapp/i ) ).toBeInTheDocument()
    expect( screen.getByText( /Welcome to MoviePedia/i ) ).toBeInTheDocument()
  })

  it('should render props in child component Title', async () => {
    const msg = 'Welcome to MoviePedia'
    render(Title, {
      props: { msg }
    })
    expect( screen.getByText( /Welcome to MoviePedia/i ) ).toBeInTheDocument()
  })
})

// describe('Working with forms', () => {
//   it('botón disableado', async () => {
//     const msg = 'new message'
//     render(HelloWorld, {
//       props: { msg }
//     })

//     const $button = screen.getByRole('button', { name: "Submit" })
//     expect($button).toBeDisabled()


//     // -----------FORMA 1
//     // await fireEvent.update(
//     //   screen.getByLabelText('Name'), "Luis"
//     // )

//     // expect($button).not.toBeDisabled()

//     // -----------FORMA 2
//     fireEvent.update(
//       screen.getByLabelText('Name:'), "Luis"
//     )
//     waitFor(() =>
//       expect($button).not.toBeDisabled()
//     )

//   })

//   it('event working', async () => {
//     const msg = 'new message'
//     const { emitted } = render(HelloWorld, {
//       props: { msg }
//     })

//     const $button = screen.getByRole('button', { name: "Submit" })
    
//     expect($button).toBeDisabled()

//     // -----------FORMA 1
//     await fireEvent.update(
//       screen.getByLabelText('Name:'), "Luis"
//     )
//     expect($button).not.toBeDisabled()

//     fireEvent.click($button)

//     expect(emitted().submit[0][0])
//       .toEqual({ name: "Luis" })

//   })

//   it('escribe en pantalla', async () => {
//     const msg = 'new message'
//     render(HelloWorld, {
//       props: { msg }
//     })

//     const $button = screen.getByRole('button', { name: "Submit" })

//     // -----------FORMA 1
//     await fireEvent.update(
//       screen.getByLabelText('Name:'), "Luis"
//     )
//     expect($button).not.toBeDisabled()

//     fireEvent.click($button)

//     expect(await screen.findByText("Luis")).toBeInTheDocument()
//   })
// })
