import { createSlice } from "@reduxjs/toolkit";
// import { UserInterface } from "../interfaces/UserInterface";
import { RootState } from "./index";

interface ToggleState {
    isVisible: boolean;
}

// const userLogged: UserInterface =
// {
//     id: '',
//     name: "",
//     lastName: "",
//     email: "",
//     password: "",
//     role: '',
//     state: false,
//     google: false,
//     image: '',
//     preferredSports: [],
//     challengeAvailability: []
// }

const headerName: string = 'Home'
const isSummaryScreen: string = ''
const isToggleCalled: boolean = false
const goToNextStep: boolean = false
const goSummaryScreen: boolean = false
const formStepI: boolean = true
const formStepII: boolean = false
const formStepIII: boolean = false
const flagForUpdates: boolean = false

// const isSummaryConfirmed: boolean = false

const userLogged = false
const loggedUserRole = ''

const initialState = {
    isVisible: true,
    metaDataLoginTrigger: false,
    metaDataSignUpTrigger: false,
    userLogged,
    headerName,
    isToggleCalled,
    goToNextStep: false,
    isSummaryConfirmed: false,
    isSummaryScreen,
    goSummaryScreen,
    formStepI,
    formStepII,
    formStepIII,
    flagForUpdates,
    loggedUserRole
};

const sliceMenu = createSlice({
    name: "ui",
    initialState,
    reducers: {
        hideUsersPictureWhenDrawerIsOpen(state) {
            state.isVisible = !state.isVisible;
        },
        
        sliceAddUserLogged(state) {
            state.userLogged = !state.userLogged
        },
        sliceLoggedUserRole(state, action) {
            state.loggedUserRole = action.payload
        },
        toggleMetaDataBooleanLogin(state) {
            state.metaDataLoginTrigger = !state.metaDataLoginTrigger
        },
        toggleMetaDataBooleanSignUp(state) {
            state.metaDataSignUpTrigger = !state.metaDataSignUpTrigger
        },
        headerNameSwitcher(state, action) {
            state.headerName = action.payload
        },
        sliceIsToggleCalled(state) {
            state.isToggleCalled = !state.isToggleCalled
        },
        sliceIsToggleGoNextStepLeague(state, action) {
            // Update the state only if goToNextStep is currently false
            if (!state.goToNextStep) {
                state.goToNextStep = action.payload;
            }
            if (state.goToNextStep) {
                state.goToNextStep = action.payload;
            }
        },
        sliceIsSummaryConfirmed(state) {
            state.isSummaryConfirmed = !state.isSummaryConfirmed
        },
        itIsSummaryScreen(state, action) {
            state.isSummaryScreen = action.payload
        },
        sliceToggleGoSummary(state) {
            state.goSummaryScreen = !state.goSummaryScreen
        },
        sliceToggleStepI(state) {
            state.formStepI = !state.formStepI
        },
        sliceToggleStepII(state) {
            state.formStepII = !state.formStepII
        },
        sliceToggleStepIII(state) {
            state.formStepIII = !state.formStepIII
        },
        sliceFlagForUpdates(state) {
            state.flagForUpdates = !state.flagForUpdates
        }

    },
});

export const { sliceLoggedUserRole, sliceFlagForUpdates, sliceToggleStepI, sliceToggleStepII, sliceToggleStepIII, sliceToggleGoSummary, itIsSummaryScreen, sliceIsSummaryConfirmed, sliceIsToggleGoNextStepLeague, sliceIsToggleCalled, headerNameSwitcher, hideUsersPictureWhenDrawerIsOpen, sliceAddUserLogged, toggleMetaDataBooleanLogin, toggleMetaDataBooleanSignUp } =
    sliceMenu.actions;
export const selectUI = (state: RootState) => state.ui;

export default sliceMenu.reducer;