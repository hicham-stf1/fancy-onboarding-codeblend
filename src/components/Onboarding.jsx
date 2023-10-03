import React, { useState, useEffect } from 'react';
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import OnboardingStep from './OnboardingStep';

export default function Onboarding({ isOpen, closeModal, onboardingGuides }) {
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        if (isOpen) {
            setCurrentPage(1); // Reset to the first page when the modal is opened
        }
    }, [isOpen]);

    const handleNext = () => {
        if (currentPage < onboardingGuides.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleFinish = () => {
        closeModal();

    };

    const handleCancel = () => {
        closeModal();

    };

    const handleBack = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleSkip = () => {
        if (currentPage === onboardingGuides.length) {
            closeModal();

        } else {
            setCurrentPage(onboardingGuides.length);
        }
    };

    const renderContent = () => {
        if (currentPage <= onboardingGuides.length) {
            return (
                <OnboardingStep
                    title={onboardingGuides[currentPage - 1].title}
                    imageUrl={onboardingGuides[currentPage - 1].imageUrl}
                    description={onboardingGuides[currentPage - 1].description}
                    stepNumber={onboardingGuides[currentPage - 1].stepNumber}
                />

            );
        } else {
            return null;
        }
    };

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-20"
                onClose={handleCancel} // Close modal on cancel
            >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <div className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <Dialog.Title
                                as="h1"
                                className=" my-2 text-3xl flex justify-center uppercase font-medium leading-6 text-gray-900"
                            >
                                <span className='font-extrabold text-[#EA943C]'>Code Blend  OnBoarding </span>
                            </Dialog.Title>
                            <div className="mt-3">
                                {renderContent()}
                            </div>

                            <div className="mt-6 flex justify-end space-x-2">
                                {currentPage > 1 && (
                                    <button
                                        type="button"
                                        className="inline-flex justify-center rounded-md
                                         border border-transparent bg-blue-100 px-4 
                                         py-2 text-sm font-medium text-blue-900
                                          hover:bg-blue-200 focus:outline-none 
                                          focus-visible:ring-2 focus-visible:ring-blue-500
                                           focus-visible:ring-offset-2"
                                        onClick={handleBack}
                                    >
                                        Back
                                    </button>
                                )}
                                {currentPage < onboardingGuides.length ? (
                                    <button
                                        type="button"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        onClick={handleNext}
                                    >
                                        Next
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-900 px-4 py-2 text-sm font-medium text-blue-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        onClick={handleFinish}
                                    >
                                        Finish
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
