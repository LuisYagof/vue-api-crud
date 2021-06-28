import { render, screen, fireEvent, waitFor } from '@testing-library/vue'
import '@testing-library/jest-dom'
import OMDB from '../../src/views/OMDB.vue'

describe('Searcher in OMDB component', () => {
  render(OMDB)
  const $searchBTN = screen.getByRole('searchBtn')
  const $searchInput = screen.getByPlaceholderText('Movie or TV show name')
  const $searchSelect = screen.getByRole('format-select')
  // const $options = getAllByTestId('select-option')

  it('should have the button disabled before filling form', async () => {
    expect($searchBTN).toBeDisabled()
  })
  

  it('btn turns enabled once the inputs are filled -and the inputs are filled correctly-', async () => {
    await fireEvent.update($searchInput, "Eternal")
    await fireEvent.update($searchSelect, "movie")
    // await fireEvent.update($searchSelect, { target: { value: "movie" }, })

    expect($searchInput.value).toBe("Eternal");

    expect($searchSelect.value).toBe("movie");

    waitFor(() =>
      expect($searchBTN).not.toBeDisabled()
    )
  })


  it('shows a spinner while fetching response -and disappears once the results are showed', async () => {
    // await fireEvent.update($searchInput, "Eternal")
    // await fireEvent.update($searchSelect, "movie")
    await fireEvent.click($searchBTN)

    expect($searchBTN).toBeDisabled()

    waitFor(() =>
      expect(screen.getByRole('lupaSpinner')).toBeInTheDocument()
    )

    waitFor(() =>
      expect(screen.getByRole('lupaSpinner')).not.toBeInTheDocument()
    )

    waitFor(() =>
      expect($searchBTN).toBeDisabled()
    )
  })


  it('shows response after spinner', async () => {
    waitFor(() =>
      expect(screen.getByRole('responseWrapper')).toBeInTheDocument()
    )
    waitFor(() =>
      expect(screen.getByText(/Eternal/i)).toBeInTheDocument()
    )
  })
  
})