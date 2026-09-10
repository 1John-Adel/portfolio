const projects = [
  {
    id: 1,
    year: "JAN 2026",
    image: "ALPACA_GENERATOR.jpg",
    context: "PERSONAL SIDE PROJECT",
    code: "DEV-01 // 26",
    tag: "CREATIVE TOOL",
    title: "ALPACA GENERATOR",
    subtitle: "Customizable Avatar Builder & Image Export Utility",
    description: `Built an interactive and responsive web application as a practical project to master front-end fundamentals, 
    allowing users to customize and download stylized alpaca images. 
    Implemented dynamic DOM manipulation for real-time customization and managed feature states using pure JavaScript. 
    Integrated canvas-based image export functionality for downloading user designs.`,
    stack: ["HTML5", "CSS3", "Vanilla JavaScript (ES6+)", "DOM Manipulation"],
    repo: "https://github.com/1John-Adel/ALPACA-GENERATOR",
    demo: "https://1john-adel.github.io/ALPACA-GENERATOR/",
  },
  {
    id: 2,
    year: "MAY 2026",
    image: "Ancient_Heritage.jpg",
    context: "ACADEMIC PROJECT // CAPITAL UNIVERSITY",
    code: "DEV-02 // 26",
    tag: "CASE STUDY",
    title: "ANCIENT HERITAGE",
    subtitle: "Interactive Cultural Heritage Explorer & Map Application",
    description: `Collaborated with a team to develop a university project focused on showcasing Egypt's cultural heritage.
    • After the official submission, independently redesigned and significantly enhanced the entire front-end, delivering a cleaner,
    more modern, and user-friendly experience.
    • Refactored the HTML, CSS, and JavaScript codebase, improving code organization, maintainability, and overall quality.
    • Enhanced the interactive map with smoother navigation, improved responsiveness, and refined user interactions.
    • Fixed front-end issues and polished the application's UI/UX across multiple pages.
    • Built and refined the entire front-end using vanilla HTML, CSS, and JavaScript without relying on front-end frameworks,
    demonstrating a strong understanding of core web technologies.
    The complete post-submission development history and individual contributions are documented in the project's Git repository.`,
    stack: [
      "HTML5",
      "CSS3",
      "Vanilla JavaScript (ES6+)",
      "DOM Manipulation",
      "Relational JSON",
    ],
    repo: "https://github.com/1John-Adel/ancient-heritage",
    demo: "https://1john-adel.github.io/ancient-heritage/",
  },
  {
    id: 3,
    year: "AUG 2026",
    image: 0,
    context: "NTI TRAINEE PROJECT",
    code: "ML-01 // 26",
    tag: "MACHINE LEARNING",
    title: "FAKE NEWS DETECTION",
    subtitle: "Machine Learning & NLP System for News Classification",
    description: `A Machine Learning and NLP system designed to classify news articles as Fake or True. Built and evaluated multiple models across different text vectorization techniques (CountVectorizer, TF-IDF, Word2Vec) and validated against an external dataset to test real-world generalization.
End-to-End NLP Pipeline: Cleaned and preprocessed unstructured text data by removing HTML tags, URLs, metadata headers (e.g., Reuters markers), and special characters using Python regex.
Feature Engineering: Extracted textual features using 3 distinct approaches: CountVectorizer (N-grams), TF-IDF Vectorizer (sublinear scaling), and custom-trained Word2Vec embeddings.
Model Benchmark & Comparison: Trained and evaluated 9 baseline models across 3 classifiers (LinearSVC, Random Forest, and Naïve Bayes).
In-Domain Performance: Achieved top performance with LinearSVC + TF-IDF, reaching 99.16% Accuracy and a 0.99 F1-Score on test data.
Cross-Dataset Validation: Evaluated models on an external dataset (WELFake 10k samples) to measure out-of-distribution generalization, where Random Forest + TF-IDF led with 84.89% Accuracy and 0.833 F1-Score.
Visualization & Analysis: Built interactive visualizations (Confusion Matrices & F1-Score comparisons) using Matplotlib and Seaborn to analyze misclassification patterns.`,
    stack: [
      "Python",
      "Scikit-Learn",
      "Gensim (Word2Vec)",
      "TF-IDF & N-Grams",
      "Pandas & Seaborn",
    ],
    repo: "https://github.com/1John-Adel/fake-news-classification",
    demo: "https://www.kaggle.com/code/john1adel/fake-news-detection-system",

    renderPreview() {
      return (
        <div className="code">
          <div className="code_header">
            <section>
              <div className="circle"></div>
              <p>FAKE_NEWS_CLASSIFIER.ipynb // MODEL EXECUTION</p>
            </section>
            <h6>ENV: JUPYTER</h6>
          </div>
          <div className="code_body">
            <section className="code_imp">
                <span className="comment"># Import and Setup</span><br/>
                <span className="red">import</span> re<br/>
                <span className="red">import</span> numpy as np<br/>
                <span className="red">import</span> pandas as pd<br/>
                <span className="red">import</span> matplotlib.pyplot as plt<br/>
                <span className="red">import</span> seaborn as sns<br/>
                <span className="red">from</span> sklearn.model_selection <span className="red">import</span> train_test_split<br/>
                <span className="red">from</span> sklearn.feature_extraction.text <span className="red">import</span> CountVectorizer, TfidfVectorizer<br/>
                <span className="red">from</span> gensim.models <span className="red">import</span> Word2Vec<br/>
                <span className="red">from</span> sklearn.naive_bayes <span className="red">import</span> MultinomialNB, GaussianNB<br/>
                <span className="red">from</span> sklearn.svm <span className="red">import</span> LinearSVC<br/>
                <span className="red">from</span> sklearn.ensemble <span className="red">import</span> RandomForestClassifier<br/>
                <span className="red">from</span> sklearn.metrics <span className="red">import</span> accuracy_score, f1_score, confusion_matrix, classification_report
            </section>
            <section className="code_sec">
              <span className="comment"># Train / Test Split</span><br/>
              X = df[<span className="red">'clean_text'</span>]<br/>
              y = df[<span className="red">'label'</span>]<br/>
              X_train, X_test, y_train, y_test = <span className="red">train_test_split</span>(<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;X, y, <span className="red">test_size</span> = 0.4, <span className="red">random_state</span> = 42, <span className="red">stratif</span>y = y<br/>
              )
            </section>
            <section>
              <span className="comment"># Model Training & Evaluation</span><br/>
                <span className="red">evaluate_model</span>(<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;LinearSVC(<span className="red">C</span> = 1.0, <span className="red">max_iter</span> = 5000), "LinearSVC (Count)", X_train_count, X_test_count<br/>
                )<br/>
                svm_tfidf_preds = <span className="red">evaluate_model</span>(<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;LinearSVC(<span className="red">C</span> = 1.0, <span className="red">max_iter</span> = 5000), 'LinearSVC(TF-IDF)', X_train_tfidf, X_test_tfidf<br/>
                )<br/>
                <span className="red">evaluate_model</span>(<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;LinearSVC(<span className="red">C</span> = 1.0, <span className="red">max_iter</span> = 5000), "LinearSVC (Word2Vec)", X_train_w2v, X_test_w2v<br/>
                )
            </section>
            <section className="code_run">
              <span className="comment">[EXECUTION COMMAND]:</span>
              <div>
                <span className="red">python</span> <b>-m</b> notebook
                project.ipynb <div></div>
              </div>
            </section>
          </div>
          <div className="code_footer">
            <section>ACCURACY: 99.16%</section>
            <section>F1_SCORE: 0.99</section>
          </div>
          <div className="context">{this.context}<span>{this.code}</span></div>
        </div>
      );
    },
  },
];

export default projects;