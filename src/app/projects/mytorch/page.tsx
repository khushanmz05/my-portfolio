import CaseStudyLayout from "../../../../components/CaseStudyLayout";
import { getProject } from "../../../data/projects";

export default function MyTorchCaseStudy() {
  const project = getProject("mytorch")!;

  return (
    <CaseStudyLayout
      project={project}
      label="Machine learning, Team of 2"
      summary="A neural-network library and chess-position analyzer written from scratch with NumPy — no PyTorch, TensorFlow or hidden framework doing the work."
      sections={[
        {
          label: "The project",
          title: "A neural network you can read end to end",
          body: "MyTorch implements dense layers, ReLU, sigmoid, tanh, softmax cross-entropy, mini-batch SGD, Adam, inverted dropout, L2 weight decay and early stopping directly in NumPy. The same library powers a CLI that classifies chess positions as nothing, check or checkmate for either side.",
        },
        {
          label: "The data",
          title: "Turning a FEN into 781 numbers",
          body: "Each position becomes twelve one-hot piece planes over 64 squares, plus active colour, four castling rights and eight en-passant file values. The halfmove clock and fullmove number are deliberately excluded. Duplicate inputs were removed before an approximately 80/20 split within each class.",
          bullets: [
            "572,450 training positions after preparation.",
            "143,109 held-out test positions.",
            "7,460 duplicate positions removed before splitting.",
          ],
        },
        {
          label: "Training",
          title: "Two hidden layers, one honest checkpoint",
          body: "The reported run uses 128 and 64 hidden units with ReLU, dropout at 0.05, Adam at a 0.001 learning rate, L2 decay and early stopping on an internal 15% validation split. The best checkpoint landed at epoch 28 of 30.",
          wide: true,
        },
        {
          label: "Results",
          title: "85.43% on data the model never saw",
          body: "The supplied model reaches 85.53% validation accuracy and 85.43% on the held-out test set. Batched prediction over the full test file averages 0.0029 ms per position. The project documents the benchmark method rather than presenting a single flattering number.",
        },
        {
          label: "What I learned",
          title: "Reproducibility is part of the model",
          body: "The dataset preparation, architecture config, training command and benchmark are all checked in. That makes the result repeatable and makes the limits visible: overall accuracy does not prove equal performance across every class.",
        },
      ]}
      focus={[
        {
          title: "From first principles",
          body: "Forward passes, gradients, optimizers and dropout implemented directly in NumPy.",
        },
        {
          title: "Reproducible split",
          body: "A seeded preparation script removes duplicates and holds out a clean test set.",
        },
        {
          title: "Honest measurement",
          body: "Validation accuracy, held-out accuracy and batched latency reported separately.",
        },
      ]}
    />
  );
}
