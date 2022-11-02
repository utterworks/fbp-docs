# Maintain a dataset
The dataset forms the key artefact for language model training - these are the examples that you train the model with that allow it to make generalisations used to perform accurate inference on text it has never seen before - the real power of Machine Learning and NLP.  

## Import from a file
The dataset can be maintained in a number of ways, including being managed externally as a .csv file. For text classification the file is a simple list of text and label pairs. A dataset file can be imported and exported from the dataset section of the app using the appropriate menu options. When importing you can choose to append the new data to the dataset (if one exists), or overwrite any existing data. 

>Maintaining the datset externally in a file allows for the file to be version controlled in an external repository

<video autoplay muted loop width="740" controls>
  <source src="../video/import-dataset.mp4" type="video/mp4"/>
  Your browser does not support the video tag.
</video>

>If you are using excel to edit the csv file, please review the resulting file in a text editor. Excel supports multiple csv formats, so please ensure the file is a simple comma delimited pair of text and label with each item on a new line (and ensure there is no hidden blank line at the end of the file). The column headings "text" and "label" are required.

## Create in the app

## Add from operational data