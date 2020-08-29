let importAllIcon = requireContext => {
  requireContext.keys().forEach(requireContext);
};

try {
  importAllIcon(require.context("../icons", true, /\.svg$/));
} catch (error) {}
