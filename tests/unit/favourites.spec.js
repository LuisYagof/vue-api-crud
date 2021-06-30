jest.mock('../../src/hooks/GetFavsHook.js');
import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import Favourites from '../../src/views/Favourites.vue'
import store from '../../src/store'


// ----------------FORMA 1: NO REQUIERE CAMBIAR LA STORE


describe('Favourites component', () => {
  beforeEach(() => {
    return render(Favourites, { store })
  }, 5000);

  it('has content', async () => {
    expect(await screen.findByText(/Favorite movies & TV shows/i)).toBeInTheDocument()
  })

  it('displays the loaded favorites (mocked)', async () => {
    expect(await screen.findByText(/Blade Runner/i)).toBeInTheDocument()
  })

  it('does not display the favorites that are not mocked', async () => {
    expect(screen.queryByText(/The Wire/i)).not.toBeInTheDocument()
  })
})