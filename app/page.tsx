import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Real World DSA</h1>
        <b>A List of stand alone Applications built for the purpose of showcasing the usage of DSA and AI. Each having its unique features and importance</b>
        <div className={styles.appsContainer}>
          {/* App 1 */}
          <div className={styles.appWrapper}>
            <h2>Search Suggestion using Tries</h2>
            <iframe
              src="https://1-search-suggestion-tries-vik.streamlit.app/"
              className={styles.appFrame}
              title="App 1"
            />
          </div>

          {/* App 2 */}
          <div className={styles.appWrapper}>
            <h2>Autocorrect Word using Levenshtein Distance</h2>
            <iframe
              src="https://2-autocorrect-levenshtein.streamlit.app/"
              className={styles.appFrame}
              title="App 2"
            />
          </div>

          {/* App 3 */}
          <div className={styles.appWrapper}>
            <h2>Identifying differences in standard libraries - c++ and Java</h2>
            <iframe
              src="https://java-collection-vs-cpp-stl-cheatsheet.streamlit.app/"
              className={styles.appFrame}
              title="App 3"
            />
          </div>

          {/* App 4 */}
          <div className={styles.appWrapper}>
            <h2>AI Email Generator</h2>
            <iframe
              src="https://java-collection-vs-cpp-stl-cheatsheet.streamlit.app/"
              className={styles.appFrame}
              title="App 4"
            />
          </div>

          {/* App 5 */}
          <div className={styles.appWrapper}>
            <h2>AI Agents based food decider chatbot</h2>
            <iframe
              src="https://java-collection-vs-cpp-stl-cheatsheet.streamlit.app/"
              className={styles.appFrame}
              title="App 5"
            />
          </div>


          {/* App 6 */}
          <div className={styles.appWrapper}>
            <h2>No Excuse 2025</h2>
            <iframe
              src="https://java-collection-vs-cpp-stl-cheatsheet.streamlit.app/"
              className={styles.appFrame}
              title="App 6"
            />
          </div>


        </div>
      </main>
      <footer className={styles.footer}>
        <p>By: Vikrant Thoidingjam</p>
      </footer>
    </div>
  );
}