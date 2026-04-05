// removed: All inline section definitions (overview, architecture, security, principles, modes, workflow, technical, prompts, difference, limitations, usecases, privacy, compatibility, codequality)
// These have been moved to specialized files:
// - AboutContentOverview.js (overview, principles)
// - AboutContentArchitecture.js (architecture, security, technical, codequality)
// - AboutContentModes.js (modes)
// - AboutContentWorkflow.js (workflow, prompts, difference)
// - AboutContentMisc.js (limitations, usecases, privacy, compatibility)

// Combine all about sections from separate modules
window.ABOUT_SECTIONS = [
  ...window.ABOUT_SECTIONS_OVERVIEW,
  ...window.ABOUT_SECTIONS_ARCHITECTURE,
  ...window.ABOUT_SECTIONS_MODES,
  ...window.ABOUT_SECTIONS_WORKFLOW,
  ...window.ABOUT_SECTIONS_MISC
];