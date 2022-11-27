module.exports = {
  ci: {
    collect: {
      //   staticDistDir: "./build",
      startServerCommand: "npm run start",
      url: ["http://localhost:3000/index.html"],
      // collect options here
    },
    assert: {
      // assert options here
    },
    upload: {
      // upload options here
      target: "temporary-public-storage",
    },
    server: {
      // server options here
    },
    wizard: {
      // wizard options here
    },
  },
};
