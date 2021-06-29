jest.mock('../../src/hooks/GetFavsHook.js');
import { render, screen, fireEvent, waitFor } from '@testing-library/vue'
import '@testing-library/jest-dom'
import Favourites from '../../src/views/Favourites.vue'
import store from '../../src/store'


// ----------------FORMA 1: NO REQUIERE CAMBIAR LA STORE


describe('Favourites component', () => {
  beforeEach(() => {
    return render(Favourites, { store })
  });
  // render(Favourites, { store })

  it('has content', async () => {
    expect(await screen.findByText(/Favorite movies & TV shows/i)).toBeInTheDocument()
  })

  it('has filters text', async () => {
    expect(await screen.findByText(/Filters/i)).toBeInTheDocument()
  })
  // expect(await screen.findByText(/Blade Runner/i)).toBeInTheDocument()
  // it('has filters text', async () => {
  //   expect(screen.queryByText(/The Wire/i)).not.toBeInTheDocument()
  // })
  // expect(screen.queryByText(/Rambo/i)).not.toBeInTheDocument()
  // screen.debug()

  // })
})