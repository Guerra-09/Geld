import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Subscription } from '../constants/interfaces';

interface SubscriptionState {
  items: Subscription[];
  loading: boolean;
  error: string | null;
}

const initialState: SubscriptionState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchSubscriptions = createAsyncThunk(
  'subscriptions/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      // TODO: Replace with actual API call
      const response = await fetch('API_URL/subscriptions');
      if (!response.ok) throw new Error('Failed to fetch subscriptions');
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addSubscription = createAsyncThunk(
  'subscriptions/add',
  async (subscription: Omit<Subscription, 'uuid'>, { rejectWithValue }) => {
    try {
      // TODO: Replace with actual API call
      const response = await fetch('API_URL/subscriptions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(subscription),
      });
      if (!response.ok) throw new Error('Failed to add subscription');
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const subscriptionSlice = createSlice({
  name: 'subscriptions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubscriptions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSubscriptions.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchSubscriptions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(addSubscription.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addSubscription.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addSubscription.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default subscriptionSlice.reducer;
