import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const surveyStore = create(devtools((set) => ({
    surveyDrafts: {},
    recentlyCreatedDraftID: null,
    currentlyUsedDraftID: null,
    setRecentID : (id) => set((state) => ({ recentlyCreatedDraftID: id })),
    setCurrentlyUsedID : (id) => set((state) => ({ currentlyUsedDraftID: id })),
    addSurvey: (surveyId) => set((state) => ({
        surveyDrafts: {
            ...state.surveyDrafts,
            [surveyId]: {
                currentPage: 1,
                responses: {},
                isSurveyCompleted: false,
                startTime: null,
                creationTime: new Date().toISOString(),
                name: "",
                originalQuestions: {},
            },
        },
    })),
    setOriginalQuestions: (surveyId, questions) => set((state) => ({
        surveyDrafts: {
            ...state.surveyDrafts,
            [surveyId]: {
                ...state.surveyDrafts[surveyId],
                originalQuestions: questions,
            },
        },
    })),
    addSurveyName: (surveyId, name) => set((state) => ({
        surveyDrafts: {
            ...state.surveyDrafts,
            [surveyId]: {
                ...state.surveyDrafts[surveyId],
                name: name,
            },
        },
    })),
    removeSurvey: (surveyId) => set((state) => {
        const { [surveyId]: _, ...remainingSurveys } = state.surveyDrafts;
        return { surveyDrafts: remainingSurveys };
    }),
    setSurveyCompleted: (surveyId) => set((state) => ({
        surveyDrafts: {
            ...state.surveyDrafts,
            [surveyId]: {
                ...state.surveyDrafts[surveyId],
                isSurveyCompleted: true,
            },
        },
    })),
    setCurrentPage: (id, currentPage) => set((state) => ({
        surveyDrafts: {
            ...state.surveyDrafts,
            [id]: {
                ...state.surveyDrafts[id],
                currentPage: currentPage,
            },
        },
    })),
    setResponses: (id, responses) => set((state) => ({
        surveyDrafts: {
            ...state.surveyDrafts,
            [id]: {
                ...state.surveyDrafts[id],
                responses: responses,
            },
        },
    })),
    setStartTime: (id, startTime) => set((state) => ({
        surveyDrafts: {
            ...state.surveyDrafts,
            [id]: {
                ...state.surveyDrafts[id],
                startTime: startTime,
            },
        },
    })),
}), "SurveyStore")); // Naming the store "SurveyStore" for DevTools

export const downloadStore = create(devtools((set) => ({
    downloadedSurveys: [],
    addSurvey: (survey) => set((state) => ({ downloadedSurveys: [...state.downloadedSurveys, survey] })),
    removeSurvey: (survey) => set((state) => ({ downloadedSurveys: state.downloadedSurveys.filter((s) => s !== survey) })),
}), "DownloadStore")); // Naming the store "DownloadStore" for DevTools
