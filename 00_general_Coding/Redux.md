Redux Terminologies

1). Store:
a) Store, stores reducers from each slice, and reducers manages their state, So somwtimes we say that store manages our state .

2). Updating state inside store:
a) we call dispatch function and pass action object inside it, indicating how we want to upate our state

3). Reducer function :

a) after we call dispatch function ,it call reducer function, which has entire logic to update the state.
b) reducer takes the state and action object as agument

4). Slice:
a) A app may contain many features, for each feature we create a slice. Each Slice is a collection of reducer logic and action
specific to that feature
