// Handle async thunk action function-
export const handleAsyncThunkAction = (builder, action, stateUpdater) => {
    builder.addCase(action.pending, (state) => {
        state.isLoading = true
    })
    builder.addCase(action.fulfilled, (state, action) => {
        state.isLoading = false;
        stateUpdater(state, action.payload);
    })
    builder.addCase(action.rejected, (state) => {
        state.isLoading = false;
        state.isError = true
    })
}