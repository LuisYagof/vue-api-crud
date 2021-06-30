jest.mock('../../src/hooks/GetMovies.js');
import { render, screen, fireEvent, waitFor } from '@testing-library/vue'
import '@testing-library/jest-dom'
import OMDB from '../../src/views/OMDB.vue'

jest.setTimeout(10000) // ---> to change JEST default config -5s timeout MAX- to 10 seconds

describe('Searcher in OMDB component', () => {

  beforeEach(() => {
    render(OMDB)
  })

  it('should have the button disabled before filling form', async () => {
    expect(screen.getByRole('searchBtn')).toBeDisabled()
    // expect($searchBTN).toBeDisabled()
  })


  it('btn turns enabled once the inputs are filled -and the inputs are filled correctly-', async () => {
    expect(screen.getByRole('searchBtn')).toBeDisabled()
    await fireEvent.update(screen.getByPlaceholderText('Movie or TV show name'), "Eternal")
    await fireEvent.update(screen.getByRole('format-select'), "movie")
    // await fireEvent.update($searchSelect, { target: { value: "movie" }, })

    expect(screen.getByPlaceholderText('Movie or TV show name').value).toBe("Eternal");
    expect(screen.getByRole('format-select').value).toBe("movie");

    waitFor(() =>
      expect(screen.getByRole('searchBtn')).not.toBeDisabled()
    )
  })


  it('shows a spinner while fetching response -and disappears once the results are showed', async () => {
    await fireEvent.update(screen.getByPlaceholderText('Movie or TV show name'), "Eternal")
    await fireEvent.update(screen.getByRole('format-select'), "movie")
    await fireEvent.click(screen.getByRole('searchBtn'))

    expect(screen.getByRole('searchBtn')).toBeDisabled()

    waitFor(() =>
      expect(screen.getByRole('lupaSpinner')).toBeInTheDocument()
    )

    waitFor(() => expect(screen.queryByRole('lupaSpinner')).not.toBeInTheDocument(), { timeout: 3000 })

    waitFor(() =>
      expect(screen.getByRole('searchBtn')).toBeDisabled()
    )
  })


  it('shows response after spinner', async () => {
    await fireEvent.update(screen.getByPlaceholderText('Movie or TV show name'), "Eternal")
    await fireEvent.update(screen.getByRole('format-select'), "movie")
    await fireEvent.click(screen.getByRole('searchBtn'))

    await waitFor(() => {
      expect(screen.getByRole('responseWrapper')).toBeInTheDocument()
    }, { timeout: 2500, interval: 500 })

    await waitFor(() => {
      expect(screen.getByText(/eternal/i)).toBeInTheDocument()
    }, { timeout: 3000, interval: 500 })
  })

})

    // -------------------------------------------------VARIABLES DEL DOM:
    // const $searchBTN = screen.getByRole('searchBtn')
    // const $searchInput = screen.getByPlaceholderText('Movie or TV show name')
    // const $searchSelect = screen.getByRole('format-select')
    // const $options = getAllByTestId('select-option')